

INC	=	/home/ope/msgpack/msgpack-c
CC	=	/opt/centos/devtoolset-1.1/root/usr/bin/g++
OPT	=	-std=c++11 -DMSGPACK_USE_CPP03

OBJ	= obj/msgpack_sample.o

all	:	bin/msgpack_sample.exe

bin/msgpack_sample.exe : $(OBJ)
	$(CC) $(OPT) -o $@ $(OBJ)


obj/msgpack_sample.o : msgpack_sample.cpp
	$(CC) $(OPT) -c $< -o $@


clean :
	rm -rf obj/* bin/*





