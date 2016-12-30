class RepliesController < ApplicationController
  def new
    @review = Review.find_by(id: params[:review_id])
    @reply = Reply.new
  end

  def create
    Reply.create(create_params)
    redirect_to :reviews, notice: '投稿が完了しました'
  end

  private
  def create_params
    params.require(:reply).permit(:comment, :nickname).merge(
        review_id: params[:review_id]
      )
  end
end