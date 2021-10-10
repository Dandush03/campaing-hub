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

ActiveRecord::Schema.define(version: 20_211_004_015_614) do
  # These are extensions that must be enabled in order to support this database
  enable_extension 'plpgsql'

  create_table 'campaigns', id: :uuid, default: -> { 'gen_random_uuid()' }, force: :cascade do |t|
    t.string 'name'
    t.string 'description'
    t.string 'token'
    t.datetime 'created_at', precision: 6, null: false
    t.datetime 'updated_at', precision: 6, null: false
    t.uuid 'tenant_id'
    t.index ['token'], name: 'index_campaigns_on_token', unique: true
  end

  create_table 'companies', id: :uuid, default: -> { 'gen_random_uuid()' }, force: :cascade do |t|
    t.string 'name'
    t.string 'logo'
    t.string 'identification'
    t.string 'subdomain'
    t.string 'domain'
    t.string 'lang', default: 'en', null: false
    t.datetime 'created_at', precision: 6, null: false
    t.datetime 'updated_at', precision: 6, null: false
    t.uuid 'tenant_id', default: -> { 'gen_random_uuid()' }
    t.index ['domain'], name: 'index_companies_on_domain', unique: true
    t.index ['identification'], name: 'index_companies_on_identification', unique: true
    t.index ['name'], name: 'index_companies_on_name', unique: true
    t.index ['subdomain'], name: 'index_companies_on_subdomain', unique: true
    t.index ['tenant_id'], name: 'companies_tenant_id_key', unique: true
  end

  create_table 'company_preferences', id: :uuid, default: -> { 'gen_random_uuid()' }, force: :cascade do |t|
    t.string 'available_locales', default: %w[es en], array: true
    t.string 'default_locale', default: 'en'
    t.uuid 'company_id'
    t.datetime 'created_at', precision: 6, null: false
    t.datetime 'updated_at', precision: 6, null: false
    t.uuid 'tenant_id'
    t.index ['company_id'], name: 'index_company_preferences_on_company_id'
  end

  create_table 'contact_preferences', id: :uuid, default: -> { 'gen_random_uuid()' }, force: :cascade do |t|
    t.string 'locale'
    t.uuid 'contact_id'
    t.datetime 'created_at', precision: 6, null: false
    t.datetime 'updated_at', precision: 6, null: false
    t.uuid 'tenant_id'
    t.index ['contact_id'], name: 'index_contact_preferences_on_contact_id'
  end

  create_table 'contacts', id: :uuid, default: -> { 'gen_random_uuid()' }, force: :cascade do |t|
    t.string 'firstname', default: '', null: false
    t.string 'lastname', default: '', null: false
    t.string 'contact_type', default: 'advocate', null: false
    t.string 'image'
    t.uuid 'user_id'
    t.datetime 'created_at', precision: 6, null: false
    t.datetime 'updated_at', precision: 6, null: false
    t.uuid 'tenant_id'
    t.index ['user_id'], name: 'index_contacts_on_user_id'
  end

  create_table 'taggings', id: :serial, force: :cascade do |t|
    t.integer 'tag_id'
    t.string 'taggable_type'
    t.integer 'taggable_id'
    t.string 'tagger_type'
    t.integer 'tagger_id'
    t.string 'context', limit: 128
    t.datetime 'created_at'
    t.string 'tenant', limit: 128
    t.index ['context'], name: 'index_taggings_on_context'
    t.index %w[tag_id taggable_id taggable_type context tagger_id tagger_type], name: 'taggings_idx',
                                                                                unique: true
    t.index ['tag_id'], name: 'index_taggings_on_tag_id'
    t.index %w[taggable_id taggable_type context], name: 'taggings_taggable_context_idx'
    t.index %w[taggable_id taggable_type tagger_id context], name: 'taggings_idy'
    t.index ['taggable_id'], name: 'index_taggings_on_taggable_id'
    t.index ['taggable_type'], name: 'index_taggings_on_taggable_type'
    t.index %w[tagger_id tagger_type], name: 'index_taggings_on_tagger_id_and_tagger_type'
    t.index ['tagger_id'], name: 'index_taggings_on_tagger_id'
    t.index ['tenant'], name: 'index_taggings_on_tenant'
  end

  create_table 'tags', id: :serial, force: :cascade do |t|
    t.string 'name'
    t.datetime 'created_at'
    t.datetime 'updated_at'
    t.integer 'taggings_count', default: 0
    t.index ['name'], name: 'index_tags_on_name', unique: true
  end

  create_table 'users', id: :uuid, default: -> { 'gen_random_uuid()' }, force: :cascade do |t|
    t.string 'email', default: '', null: false
    t.string 'username', default: '', null: false
    t.string 'encrypted_password', default: '', null: false
    t.string 'reset_password_token'
    t.datetime 'reset_password_sent_at'
    t.datetime 'remember_created_at'
    t.integer 'sign_in_count', default: 0, null: false
    t.datetime 'current_sign_in_at'
    t.datetime 'last_sign_in_at'
    t.string 'current_sign_in_ip'
    t.string 'last_sign_in_ip'
    t.string 'confirmation_token'
    t.datetime 'confirmed_at'
    t.datetime 'confirmation_sent_at'
    t.string 'unconfirmed_email'
    t.integer 'failed_attempts', default: 0, null: false
    t.string 'unlock_token'
    t.datetime 'locked_at'
    t.string 'provider'
    t.string 'uid'
    t.datetime 'created_at', precision: 6, null: false
    t.datetime 'updated_at', precision: 6, null: false
    t.uuid 'tenant_id'
    t.index ['confirmation_token'], name: 'index_users_on_confirmation_token', unique: true
    t.index ['email'], name: 'index_users_on_email'
    t.index ['reset_password_token'], name: 'index_users_on_reset_password_token', unique: true
    t.index ['unlock_token'], name: 'index_users_on_unlock_token', unique: true
    t.index ['username'], name: 'index_users_on_username'
  end

  create_table 'versions', force: :cascade do |t|
    t.string 'item_type'
    t.string '{:null=>false}'
    t.bigint 'item_id', null: false
    t.string 'event', null: false
    t.string 'whodunnit'
    t.text 'object'
    t.datetime 'created_at'
    t.uuid 'tenant_id'
    t.index %w[item_type item_id], name: 'index_versions_on_item_type_and_item_id'
  end

  create_table 'visual_media', id: :uuid, default: -> { 'gen_random_uuid()' }, force: :cascade do |t|
    t.string 'title', default: '', null: false
    t.string 'url', default: '', null: false
    t.string 'signature', default: '', null: false
    t.string 'filename', default: '', null: false
    t.integer 'rank', default: 0, null: false
    t.string 'media_type'
    t.string 'gallery_type'
    t.uuid 'gallery_id'
    t.datetime 'created_at', precision: 6, null: false
    t.datetime 'updated_at', precision: 6, null: false
    t.uuid 'tenant_id'
    t.index %w[gallery_type gallery_id], name: 'index_visual_media_on_gallery_type_and_gallery_id'
  end

  add_foreign_key 'campaigns', 'companies', column: 'tenant_id', primary_key: 'tenant_id', name: 'fk_companies',
                                            on_delete: :cascade
  add_foreign_key 'company_preferences', 'companies', column: 'tenant_id', primary_key: 'tenant_id',
                                                      name: 'fk_companies', on_delete: :cascade
  add_foreign_key 'contact_preferences', 'companies', column: 'tenant_id', primary_key: 'tenant_id',
                                                      name: 'fk_companies', on_delete: :cascade
  add_foreign_key 'contacts', 'companies', column: 'tenant_id', primary_key: 'tenant_id', name: 'fk_companies',
                                           on_delete: :cascade
  add_foreign_key 'taggings', 'tags'
  add_foreign_key 'users', 'companies', column: 'tenant_id', primary_key: 'tenant_id', name: 'fk_companies',
                                        on_delete: :cascade
  add_foreign_key 'versions', 'companies', column: 'tenant_id', primary_key: 'tenant_id', name: 'fk_companies',
                                           on_delete: :cascade
  add_foreign_key 'visual_media', 'companies', column: 'tenant_id', primary_key: 'tenant_id', name: 'fk_companies',
                                               on_delete: :cascade
end
