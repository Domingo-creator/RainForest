class RemoveUniqueFromCartItemForeignKey < ActiveRecord::Migration[5.2]
  def change
    remove_index :cart_items, :productId
    add_index :cart_items, :productId
    remove_index :cart_items, :userId
    add_index :cart_items, :userId
  end
end
