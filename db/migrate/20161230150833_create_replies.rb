class CreateReplies < ActiveRecord::Migration
  def change
    create_table :replies do |t|
      t.integer        :review_id
      t.integer        :user_id
      t.text           :comment
      t.timestamps
    end
  end
end
