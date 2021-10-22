# frozen_string_literal: true

require 'pg_rls'

PgRls.setup do |config|
  ActiveRecord::ConnectionAdapters::AbstractAdapter.include PgRls::Schema::Statements

  # Do not remove this value after initialization
  config.class_name = :company
  config.table_name = :companies
end
