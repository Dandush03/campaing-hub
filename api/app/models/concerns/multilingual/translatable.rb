# frozen_string_literal: true

module Multilingual
  module Translatable
    extend ActiveSupport::Concern

    def translatable_field_with_out_block(val)
      case val
      when Array
        val.map(&JsonTranslation.method(:translate))
      when Hash
        JsonTranslation.deep_translate(val)
      else
        JsonTranslation.translate(val)
      end
    end

    class_methods do
      def translatable_field(name)
        define_method(name) do
          val = self[name.to_sym]
          return yield val, self if block_given?
          return val unless val.present?

          translatable_field_with_out_block(val)
        end

        define_method("#{name}_translations") do
          self[name.to_sym]
        end
      end
    end

    class_methods do
      def translatable_fields(*names)
        if block_given?
          names.each { |name| translatable_field(name, &Proc.new) }
        else
          names.each(&method(:translatable_field))
        end
      end
    end

    class_methods do
      def pluck_with_translation(*fields)
        pluck(*fields).map do |row|
          case row
          when Array
            row.map(&JsonTranslation.method(:translate))
          when Hash
            JsonTranslation.deep_translate(row)
          else
            JsonTranslation.translate(row)
          end
        end
      end
    end
  end
end
