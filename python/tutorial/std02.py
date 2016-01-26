#!/bin/env python
# -*- coding: utf-8 -*-

import re
import sys
import urllib

def createJenkinsJob( lines ):
	jenkinsJob = {}
	for line in lines:
		matchBranch = re.match( '/branch/branch_(?P<branchid>[^ /]+)/(?P<java>.+)\.java$', line )
		matchDevelop = re.match( '/develop/develop_(?P<branchid>[^ /]+)_(?P<teamid>[^ /]+)/(?P<java>.+)\.java$', line )
		if matchBranch:
			str = matchBranch.group('java').split('/')[-1]
			tmp = str if re.search( 'Test$', str ) else str + "Test"
#			print matchBranch.group('branchid'), tmp 
			key = "branch,"+matchBranch.group('branchid')
			value = tmp
		elif matchDevelop:
			str = matchDevelop.group('java').split('/')[-1]
			tmp = str if re.search( 'Test$', str ) else str + "Test"
#			print matchDevelop.group('branchid'), matchDevelop.group('teamid'), tmp 
			key = "develop,"+matchDevelop.group('branchid') + "," + matchDevelop.group('teamid')
			value = tmp
		else:
			continue

		if not key in jenkinsJob:
			jenkinsJob[ key ] = set()
		jenkinsJob[ key ].add(tmp)

	return jenkinsJob


str1 = """
/branch/branch_prj1/system1/Abc.java
/branch/branch_prj1/system1/Def.java
/branch/branch_prj1/system1/AbcTest.java
/branch/branch_prj1/system2/Abc.java
/develop/develop_prj1_team1/system1/Abc.java
/develop/develop_prj1_team1/system1/AbcTest.java
"""

if __name__ == "__main__":
	print str1
	dict = createJenkinsJob( str1.split('\n') )
	for key in dict:
		tmp = key.split(',')
		urlstr = tmp[0] + '/buildWithParameters?project=' + tmp[1]
		if tmp[0] == "develop":
			urlstr += "&team=" + tmp[2]
		urlstr += "&test=" + urllib.quote( ','.join(dict[key]) )
		print key, ','.join(dict[key]), urlstr
	
