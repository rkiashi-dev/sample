

#include <msgpack.hpp>
#include <iostream>
#include <memory>
#include <sstream>


struct _DelphiString {

	std::unique_ptr<char> ptr_ ;

	_DelphiString(){}
	_DelphiString( const char* _ptr ) {
		std::string tmp = std::string( _ptr ) ;
		this->ptr_ = std::unique_ptr<char>( new char[tmp.size()] ) ;
		strcpy( this->ptr_.get(), tmp.c_str() ) ;
	}
	_DelphiString( const std::string& str )  {
			this->ptr_ = std::unique_ptr<char>( new char[str.size()] ) ;
			strcpy( this->ptr_.get(), str.c_str() ) ;

	} 

	size_t size() const {
		return strlen( ptr_.get() ) ;
	}
	const char* p() {
		return this->ptr_.get() ;
	}
	
} ;
typedef struct _DelphiString DelphiString ;

struct _OrderDetail {

	DelphiString str1 ;
	int a ;
	DelphiString str2 ;

} ;
typedef struct _OrderDetail OrderDetail ;


namespace msgpack {
MSGPACK_API_VERSION_NAMESPACE(MSGPACK_DEFAULT_API_NS) {
namespace adaptor {

template<>
struct convert< DelphiString > {
	msgpack::object const& operator() ( msgpack::object const& o, DelphiString& v ) const {
		std::string tmp ;
		switch( o.type ) {
			case msgpack::type::BIN:
				tmp.assign(o.via.bin.ptr, o.via.bin.size); 
				break ;
			case msgpack::type::STR:
				tmp.assign(o.via.str.ptr, o.via.str.size); 
				break ;
			default:
				throw msgpack::type_error();
				break ;
		}
	
		v = DelphiString( tmp ) ;

		return o ;
	}
} ;

template<>
struct pack<DelphiString> {
	template <typename Stream>
	msgpack::packer<Stream>& operator()(msgpack::packer<Stream>& o, const DelphiString& v) const {
		uint32_t size = checked_get_container_size(v.size());
		o.pack_str( size ) ;
		o.pack_str_body( v.ptr_.get(), size ) ;
		return o ;
	}
} ;

template<>
struct object_with_zone< DelphiString > {
	void operator()(msgpack::object::with_zone& o, const DelphiString& v) const {
		uint32_t size = checked_get_container_size(v.size());
		o.type = msgpack::type::STR;
		char* ptr = static_cast<char*>(o.zone.allocate_align(size));
		o.via.str.ptr = ptr;
		o.via.str.size = size;
		std::memcpy(ptr, v.ptr_.get(), v.size());
	}

} ;

template<>
struct convert< OrderDetail > {
	msgpack::object const& operator() ( msgpack::object const& o, OrderDetail& v ) const {
		if (o.type != msgpack::type::ARRAY) throw msgpack::type_error();
		if (o.via.array.size != 3) throw msgpack::type_error();

		v.str1 = DelphiString( o.via.array.ptr[0].as<std::string>() ) ;
		v.a	= o.via.array.ptr[1].as<int>() ;
		v.str2 = DelphiString( o.via.array.ptr[2].as<std::string>() ) ;

		return o ;
	}
} ;

template<>
struct pack<OrderDetail> {
	template <typename Stream>
	msgpack::packer<Stream>& operator()(msgpack::packer<Stream>& o, const OrderDetail& v) const {
		o.pack_array( 3 ) ;
		o.pack( v.str1 ) ;
		o.pack( v.a ) ;
		o.pack( v.str2 ) ;

		return o ;
	}
} ;

template<>
struct object_with_zone< OrderDetail > {
	void operator()(msgpack::object::with_zone& o, const OrderDetail& v) const {
		o.type = type::ARRAY;
		o.via.array.size = 3;
		o.via.array.ptr = static_cast<msgpack::object*>(
			o.zone.allocate_align(sizeof(msgpack::object) * o.via.array.size));
		o.via.array.ptr[0] = msgpack::object(v.str1, o.zone);
		o.via.array.ptr[1] = msgpack::object(v.a, o.zone);
		o.via.array.ptr[2] = msgpack::object(v.str2, o.zone);
	}

} ;

}
}
}

void print(std::string const& buf) {
    for (std::string::const_iterator it = buf.begin(), end = buf.end();
         it != end;
         ++it) {
        std::cout
            << std::setw(2)
            << std::hex
            << std::setfill('0')
            << (static_cast<int>(*it) & 0xff)
            << ' ';
    }
    std::cout << std::dec << std::endl;
}


using namespace std ;

int main() {


	cout << "Hello,World!" << endl ;

	{
			DelphiString dstr( "abc" ) ;

			stringstream ss ;
			msgpack::pack( ss, dstr ) ;

			print( ss.str() ) ;

			msgpack::unpacked unp;
			msgpack::unpack( unp, ss.str().data(), ss.str().size() ) ;
			msgpack::object obj = unp.get() ;

			cout << obj.as<DelphiString>().p() << endl ;
	}

	{

			OrderDetail orderDetail ;

			orderDetail.str1 = DelphiString( "z1" ) ;
			orderDetail.a = 1 ;
			orderDetail.str2 = DelphiString( "z2" ) ;

			stringstream ss ;
			msgpack::pack( ss, orderDetail ) ;

			print( orderDetail.str1.p() ) ;
			print( orderDetail.str2.p() ) ;

			msgpack::unpacked unp;
			msgpack::unpack( unp, ss.str().data(), ss.str().size() ) ;
			msgpack::object obj = unp.get() ;

			cout << obj.as<OrderDetail>().str1.p() << endl ;
			cout << obj.as<OrderDetail>().a << endl ;
			cout << obj.as<OrderDetail>().str2.p() << endl ;


	}

	return 0 ;
}
