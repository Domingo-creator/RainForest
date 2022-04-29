class Api::CartItemsController < ApplicationController

    def index
        @cart_items = CartItem.where(userId: params[:user_id])
        render :index;
    end
    
    def create 
        @cart_item = CartItem.new(cart_params)
        if @cart_item.save
            #render json: {message: 'Item successfully added'}
            render :show
        else
            render json: {message: 'Item could not be added to cart'}
        end
    end

    def update
        @cart_item = CartItem.find(params[:id])
        if @cart_item.update(cart_params)
            render :show
        else
            render json: {message: 'Item could not be updated'}
        end
    end
    
    def destroy
        @cart_item = CartItem.find(params[:id])
        if @cart_item.delete
            render json: {message: 'Item destroyed'}
        else
            render json: {message: 'Item could not be destroyed'}
        end
    end



    def cart_params 
        params.require(:cart_item).permit(:userId, :productId, :quantity, :saved_for_later)
    end

end
