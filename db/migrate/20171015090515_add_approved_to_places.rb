class AddApprovedToPlaces < ActiveRecord::Migration[5.1]
  def change
    add_column :places, :approved, :boolean, default: false
  end
end
