class AddNicknameToReply < ActiveRecord::Migration
  def change
    add_column :replies, :nickname, :string
  end
end
