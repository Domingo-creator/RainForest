class CreateCartItemSaveForLater < ActiveRecord::Migration[5.2]
  def change
      add_column :cart_items, :saved_for_later, :boolean
      
  end
end
