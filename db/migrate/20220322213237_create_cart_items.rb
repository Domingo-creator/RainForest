class CreateCartItems < ActiveRecord::Migration[5.2]
  def change
    create_table :cart_items do |t|
      t.integer :userId, null:false
      t.integer :productId, null:false


      t.timestamps
    end
    add_index :cart_items, :userId, unique:true
    add_index :cart_items, :productId, unique:true
  end
end
