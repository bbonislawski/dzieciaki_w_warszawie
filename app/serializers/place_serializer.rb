class PlaceSerializer < ActiveModel::Serializer
  attributes :id, :lat, :lng, :name, :description
end
