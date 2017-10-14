class AddFreeEntranceToPlaces < ActiveRecord::Migration[5.1]
  def change
    add_column :places, :free_entrance, :boolean
  end
end
