class Api::ProductsController < ApplicationController

    def index
        if params[:filter]  
            @products = Product.where(params[:filter])
        else
            @products = Product.all
        end
        render :index
    end


    def show
        debugger
        @product = Product.find(params[:id])
        render :show
    end


end
