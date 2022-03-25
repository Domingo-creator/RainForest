class EditProductTypes < ActiveRecord::Migration[5.2]
  def change
    change_column :products, :body, :array
    change_column :products, :description, :array
  end
end
