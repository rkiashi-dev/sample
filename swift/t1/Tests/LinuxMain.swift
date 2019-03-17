import XCTest

import t1Tests

var tests = [XCTestCaseEntry]()
tests += t1Tests.allTests()
XCTMain(tests)