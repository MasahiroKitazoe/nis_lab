class Review < ActiveRecord::Base
  has_many :replies
end