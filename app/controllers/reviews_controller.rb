class ReviewsController < ApplicationController
  def index
    @reviews = Review.all
  end

  def new
    @review = Review.new
    @user = current_user
  end

  def create
    Review.create(create_params)
    current_user.assign_attributes(update_nickname)
  end

  private
  def create_params
    params.require(:review).permit(:comment)
  end
end