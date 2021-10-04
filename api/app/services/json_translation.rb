# frozen_string_literal: true

# Json Translation
module JsonTranslation
  LOCALE_LAST_RESORT = I18n.default_locale

  module_function

  # translate hash or json string with locale iso_code keys
  # return the passed value as it is if it is invalid json or one without availalbe locale keys.
  def translate(val, locale = I18n.locale)
    return val unless val.is_a?(String) || val.is_a?(Hash)

    parsed_json = val.is_a?(String) ? format!(val) : val
    return parsed_json unless should_translate?(parsed_json)

    locale_string(parsed_json.with_indifferent_access, locale)
  rescue JSON::ParserError
    val
  end

  def find_translation(translations, locale)
    JsonTranslation.format!(translations).fetch(locale, nil)
  rescue JSON::ParserError
    nil
  end

  def deep_translate(params)
    result = params.map do |key, parameter|
      type_selector(key, parameter)
    end.to_h.with_indifferent_access

    translate(result)
  end

  def type_selector(key, parameter)
    return [key, deep_translate(parameter)] if parameter.is_a? Hash
    return [key, translate(parameter)] if parameter.is_a? String

    [key, parameter]
  end

  def deep_translate_keys(params)
    params.deep_transform_keys(&method(:translate))
  end

  def locales(string)
    return [] unless string.is_a?(String)

    format!(string).keys
  rescue JSON::ParserError, NoMethodError
    []
  end

  def coerce_translations(string)
    json?(string) ? translations(string) : string
  end

  def translations(string)
    format!(string).values
  rescue JSON::ParserError
    []
  end

  def primary(string)
    format!(string)[company_default_language].to_s
  rescue JSON::ParserError
    string
  end

  def strings(value)
    format!(value).each { |locale, text| yield([locale, text]) }
  rescue JSON::ParserError
    yield([company_default_language, value])
  end

  def coerce(value)
    return value if value.is_a?(Hash)

    format!(value)
  rescue JSON::ParserError
    { CompanyPreference.instance.default_locale => value }
  end

  def format(string)
    format!(string)
  rescue JSON::ParserError
    string
  end

  def format!(string)
    JSON.parse(string.to_s)
  end

  def json?(string)
    JSON.parse(string.to_s) && true
  rescue JSON::ParserError
    false
  end

  def company_default_language
    CompanyPreference.instance.default_locale
  end

  def locale_string(parsed_json, locale)
    parsed_json.transform_keys!(&:downcase)

    (
      parsed_json[locale.to_s.downcase].presence ||
      parsed_json[company_default_language.to_s.downcase].presence ||
      parsed_json[LOCALE_LAST_RESORT]
    ).to_s
  end

  def should_translate?(params, available_locales = I18n.available_locales)
    return false unless params.presence.is_a?(Hash)

    params.keys.any? { |key| available_locales.include?(key.downcase.to_sym) }
  end
end
