class AddOtherDataToPlaces < ActiveRecord::Migration[5.1]
  def change
    add_column :places, :other_data, :json
  end
end
