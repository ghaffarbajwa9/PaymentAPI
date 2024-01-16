class Api::V1::UsersController < ApplicationController
    protect_from_forgery with: :null_session
    # skip_before_action :authorize_request, :only => :create

    before_action :get_user, only: [:show, :edit, :update, :destroy]

    def index
        @users = User.all 
        render json: UserSerializer.new(@users).serialized_json 
    end
    def show 
        @user
        render json: UserSerializer.new(@user).serialized_json
    end
    def new 
        @user = User.new
    end 
    def create 
        @user=User.new(user_params)
        # auth_token = AuthenticateUser.new(@user.email, @user.password).call
        # response = { message: "Account created.", auth_token: auth_token }


        if @user.save 
            login!
            render json: UserSerializer.new(@user).serialized_json
        else
            render json: {error: @user.errors.messages }, status: 422
        end
    end
    def edit
        @user
    end
    def update 
        @user
        if user.update(user_params)
            render json: UserSerializer.new(@user).serialized_json
        else 
            render json: {error: @user.errors.messages }, status: 422
        end
    end
    def destroy
        @user
        if @user.destroy
            head :no_content
        else
            render json: {error: @user.errors.messages }, status: 422
        end
    end

    private 
    def get_user
        @user = User.find(params[:id])
    end
    def user_params
        params.require(:user).permit(:name, :email, :password, :password_confirmation)
    end
    # def options
    #     @options ||= {include: %i[accounts, payments]} 
    # end
end
