class PlacesAPI < API
  formatter :json, Grape::Formatter::ActiveModelSerializers

  helpers do
    params :places_params do
      optional :lat, type: String
      optional :lng, type: String
      optional :name, type: String
      optional :description, type: String
      optional :image, type: String
    end
  end

  get do
    Place.all
  end

  params { use :places_params }
  post do
    Place.create!(declared_params)
  end

  route_param :id do
    get do
      Place.find_by(params[:id])
    end

    params { use :places_params }
    put do
      order = Place.find(params[:id])
      order.update(declared_params)
      order
    end

    delete do
      order = Place.find(params[:id])
      order.destroy!
    end
  end
end
