class PlaceSerializer < ActiveModel::Serializer
  attributes :id, :lat, :lng, :name, :description, :image, :short_description, :rating

  def short_description
    @object.description&.truncate(60, separator: ' ')
  end

  def rating
    (@object.rating.to_f / @object.ratings_count).round(2)
  end

  def image
    @object.image || 'https://m20.targeo.pl/i/cache/static/wiki/miasto/wa/warszawa.jpg'
  end
end
