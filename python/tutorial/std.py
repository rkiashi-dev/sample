#!/bin/env python

import sys

input_lines = sys.stdin.readlines()
for str in input_lines :
	tmp = str.strip() 
	if tmp:
		print tmp
