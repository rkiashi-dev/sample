#!/bin/env python
# -*- coding: utf-8 -*-

import sys
from functools import reduce

if __name__ == '__main__':
	print ( 'Hello' )

def makedictionary( dictionary, url, text, ngram=2):
	cnt = len(text) - ngram
	for index in range(0,cnt+1):
		tmp = text[index:(index+ngram)]
		if tmp in dictionary:
			if not url in dictionary[ tmp ]:
				dictionary[ tmp ].append( url )
		else:
			dictionary[ tmp ] = [ url ]
	return dictionary

def searchdictionary( text, dictionary, ngram=2 ):
	cnt = len(text) - ngram
	keys = [] 
	for index in range(0,cnt+1):
		tmp = text[index:(index+ngram)]
		if not tmp in keys:
			keys.append( tmp )
	for key in keys:
		if key in dictionary:
			val = reduce( lambda x,y: x + ":" + y, dictionary[ key ] )
			print ( "found " + key + " in " + val )

if __name__ == '__main__':
	str = 'あいう'
	print ( str[0] )
	print ( str[1] )

	dic = makedictionary( {}, 'aaa', 'あいうえおかきくけこ' )
	dic = makedictionary( dic, 'bbb', 'かき' )
	print ( dic )

	searchdictionary( 'うえおかき', dic )

	newdic = {}
	files = [ 'a.txt', 'b.txt', 'c.txt' ]
	for f in files:
		with open( f, encoding='utf-8' ) as a_file:
			newdic = makedictionary( newdic, f, reduce( lambda x,y: x+y, a_file.readlines() ) )
	searchdictionary( 'ついて', newdic )

#
# URLからダウンロード、並行で処理、ディクショナリの排他制御、永続
# 

