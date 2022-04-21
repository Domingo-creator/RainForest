class Api::ReviewsController < ApplicationController
    def index
        @reviews = Review.where(productId: params[:product_id])
        render :index
    end
    
    def show
        @review = Review.find_by(params[:id])
        if @review
            render :show
        else 
            render json:{message: "Review could not be found"}
        end
    end

    def edit
        if @review.update
            render json: @review
        else 
            render json: {message: "Review could not be updated"}
        end
    end

    def create
        @review = Review.new(review_params)
        if @review.save
            render json: @review
        else
            render json: {message: "Review could not be created"}
        end
    end

    def destroy
        @review = Review.find_by(params[:id])
        if @review.delete
            render json: {message: "Review deleted"}
        else
            render json: {message: "Review could not be deleted"}
        end
    end
    
    def review_params
        params.require(:review).permit(:userId, :productId, :rating, :headline, :body)
    end
end
