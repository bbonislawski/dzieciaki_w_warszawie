class AddAgeToPlaces < ActiveRecord::Migration[5.1]
  def change
    add_column :places, :min_age, :integer, default: 0
    add_column :places, :max_age, :integer, default: 100
  end
end
