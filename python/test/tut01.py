
from unittest import TestCase
import unittest

def is_prime( x ):
	return ( x % 2 ) == 0 ;

class TestIs_prime(TestCase):
	def test_is_prime(self):
		self.assertTrue( is_prime(2) ) 


if __name__ == '__main__':
	unittest.main()
