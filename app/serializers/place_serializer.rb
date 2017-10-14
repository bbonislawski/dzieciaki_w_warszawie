class PlaceSerializer < ActiveModel::Serializer
  attributes :id, :lat, :lng, :name, :description, :image, :short_description

  def short_description
    @object.description.truncate(60, separator: ' ')
  end
end
