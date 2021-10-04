# frozen_string_literal: true

require 'rails_helper'

RSpec.shared_examples 'translatable_fields' do |model_name, field, type|
  subject { FactoryBot.build(model_name) }

  before do
    subject.public_send("#{field}=".to_sym, field_value)
  end

  context 'when the field has a translation' do
    let(:field_value) do
      case type
      when :array
        [{ en: "EN #{field}", es: "ES #{field}" }.to_json]
      when :hash
        {
          'key' => { en: "EN #{field}", es: "ES #{field}" }.to_json
        }
      else
        { en: "EN #{field}", es: "ES #{field}" }.to_json
      end
    end

    let(:expected) do
      case type
      when :array
        ["ES #{field}"]
      when :hash
        { 'key' => "ES #{field}" }
      else
        "ES #{field}"
      end
    end

    it 'returns the translated value' do
      I18n.with_locale('es') do
        expect(subject.public_send(field)).to eq(expected)
      end
    end

    it '_translations returns the raw value' do
      expect(subject.public_send("#{field}_translations".to_sym)).to eq(field_value)
    end
  end

  context 'when the field does not have a translation (pure text)' do
    let(:field_value) do
      case type
      when :array
        ["EN #{field}"]
      when :hash
        {
          'key' => "EN #{field}"
        }
      else
        "EN #{field}"
      end
    end

    it 'returns the raw value' do
      I18n.with_locale('es') do
        expect(subject.public_send(field)).to eq(field_value)
      end
    end

    it '_translations returns the raw value' do
      expect(subject.public_send("#{field}_translations".to_sym)).to eq(field_value)
    end
  end
end
