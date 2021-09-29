# frozen_string_literal: true

# Campaign Serializer
class CampaignSerializer < ActiveModel::Serializer
  attributes(*%i[id name description token labels])

  def labels
    object.labels.map(&:name)
  end

  def self.serialize(campaings)
    ActiveModel::Serializer::CollectionSerializer.new(
      campaings.includes(:labels),
      each_serializer: self
    )
  end
end
