# frozen_string_literal: true

# Campaign Serializer
class CampaignSerializer < ActiveModel::Serializer
  attributes(*%i[id name description token labels icon])

  def icon
    object.icon.url
  end

  def labels
    object.labels.map(&:name)
  end

  def self.serialize(campaings)
    ActiveModel::Serializer::CollectionSerializer.new(
      campaings,
      each_serializer: self
    )
  end
end
