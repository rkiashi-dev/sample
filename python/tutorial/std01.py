#!/bin/env python
# -*- coding: utf-8 -*-

import re
import sys

def checkIssue( str ) :
	if re.search( 'issue\s+#\d+($|\s+)', str ):
		return True
	else:
		return False

def checkRefs( str ) :
	if re.search( 'refs\s+#\d+($|\s+)', str ):
		return True
	else:
		return False

def checkComment( lines ):
	isIssue = False
	isRefs  = False
	for line in lines:
		if not isIssue:
			isIssue = checkIssue( line )
		if not isRefs:
			isRefs = checkRefs( line )
		if isIssue and isRefs:
			return True
	return False
		

str1 = '''
ssssss
issue #111
refs #222
'''
str2 = '''
ssssss
issue #111
'''
str3 = '''
ssssss
refs #222
'''
str4 = '''
ssssss
'''
str5 = '''
ssssss
issue #str
'''
str6 = '''
ssssss
issue #111 refs #222
'''
str7 = '''
ssssss
refs #222
issue #111
'''

if __name__ == "__main__":
	print "================"
	print checkIssue( 'issue #1245' )
	print checkIssue( 'Issue #1245' )
	print checkIssue( 'issue#1245' )
	print checkIssue( 'issue #a1245' )
	print checkIssue( 'issue #1245a' )
	print checkIssue( 'issue #1245 a' )
	print checkIssue( 'issue #111 refs #222' )
	print checkIssue( 'refs #222 issue #1234' )
	print checkRefs( 'issue #111 refs #222' )
	print checkRefs( 'refs #222' )
	print "================"
	print "str1", checkComment( str1.split('\n') )
	print "str2", checkComment( str2.split('\n') )
	print "str3", checkComment( str3.split('\n') )
	print "str4", checkComment( str4.split('\n') )
	print "str5", checkComment( str5.split('\n') )
	print "str6", checkComment( str6.split('\n') )
	print "str7", checkComment( str7.split('\n') )
	sys.exit(2)
	







