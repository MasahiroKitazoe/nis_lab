class ReviewsController < ApplicationController
  def index
    @reviews = Review.all
  end

  def new
    @review = Review.new
  end

  def script
  end

  def create
    Review.create(create_params)
    redirect_to reviews_url, notice: '投稿が完了しました'
  end

  private
  def create_params
    params.require(:review).permit(:comment, :nickname)
  end
end