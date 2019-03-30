CLFLAGS = $(shell llvm-config-5.0-64 --cxxflags --ldflags --libs --system-libs)

all : out.ll

minimum_builder : minimum_builder.cpp
	g++ $< $(CLFLAGS) -o $@ 

out.ll : minimum_builder
	./minimum_builder

clean :
	rm minimum_builder out.ll


