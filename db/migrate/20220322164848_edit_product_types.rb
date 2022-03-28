class EditProductTypes < ActiveRecord::Migration[5.2]
  def change
    change_column :products, :body, :string
    change_column :products, :description, :string
  end
end
