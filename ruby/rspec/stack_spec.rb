# -*- coding: utf-8 -*-
require 'rubygems'
require 'rspec'
require_relative 'stack'

describe Stack do
  before { @stack = Stack.new }

  context '新規作成の場合' do
    subject { @stack }
    it(:empty?) { should be_true }
  end
end

