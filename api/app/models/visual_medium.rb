# frozen_string_literal: true

class VisualMedium < ApplicationRecord
  belongs_to :gallery, polymorphic: true

  validates :title,     length: { minimum: 3, maximum: 50 }, allow_blank: true
  validates :signature, presence: true
  validates :filename,  presence: true
  validates :url,       presence: true
  validates :rank,      numericality: true
end
