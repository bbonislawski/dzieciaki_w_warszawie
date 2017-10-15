class Place < ApplicationRecord
  has_many :place_questionaries, dependent: :destroy
end
