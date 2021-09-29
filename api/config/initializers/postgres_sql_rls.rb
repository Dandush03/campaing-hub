# frozen_string_literal: true

require 'r_l_s/schema_statements'

ActiveRecord::ConnectionAdapters::AbstractAdapter.include RLS::SchemaStatements
