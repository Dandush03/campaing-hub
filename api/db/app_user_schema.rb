# frozen_string_literal: true

# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20_210_912_035_052) do
  # These are extensions that must be enabled in order to support this database
  enable_extension 'plpgsql'

  create_table 'companies', id: :uuid, default: -> { 'gen_random_uuid()' }, force: :cascade do |t|
    t.string 'name'
    t.string 'logo'
    t.string 'identification'
    t.string 'subdomain'
    t.string 'domain'
    t.string 'lang', default: 'en', null: false
    t.datetime 'created_at', precision: 6, null: false
    t.datetime 'updated_at', precision: 6, null: false
    t.index ['domain'], name: 'index_companies_on_domain', unique: true
    t.index ['identification'], name: 'index_companies_on_identification', unique: true
    t.index ['name'], name: 'index_companies_on_name', unique: true
    t.index ['subdomain'], name: 'index_companies_on_subdomain', unique: true
  end
end