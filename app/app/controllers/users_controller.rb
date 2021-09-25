class UsersController < ApplicationController
  def index
    @user = current_user
  end

  def update
    user = current_user
    user.update(user_params)
  end

  private
  def user_params
    params.require(:user).permit(:nickname)
  end
end

