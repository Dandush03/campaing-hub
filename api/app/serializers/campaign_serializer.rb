# frozen_string_literal: true

# Campaign Serializer
class CampaignSerializer < ActiveModel::Serializer
  attributes(*%i[id name description token label_list])

  def self.serialize(campaings)
    ActiveModel::Serializer::CollectionSerializer.new(
      campaings,
      each_serializer: self
    )
  end
end
