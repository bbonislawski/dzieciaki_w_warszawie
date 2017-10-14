class AddDistrictToPlaces < ActiveRecord::Migration[5.1]
  def change
    add_column :places, :district, :string
  end
end
