class GohanChannel < ApplicationCable::Channel
  def subscribed
    5.times { puts '***test***' }
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
