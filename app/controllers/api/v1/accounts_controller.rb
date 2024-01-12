class Api::V1::AccountsController < ApplicationController
    protect_from_forgery with: :null_session

    before_action :get_account, only: [:show, :edit, :update, :destroy]

    def index
        @accounts = Account.all 
        render json: AccountSerializer.new(@accounts).serialized_json 
    end
    def show 
        @account
        render json: AccountSerializer.new(@account).serialized_json
    end
    def new 
        @account = account.new
    end 
    def create 
        @account=Account.new(account_params)
        if @account.save
            render json: AccountSerializer.new(@account).serialized_json
        else
            render json: {error: @account.errors.messages }, status: 422
        end
    end
    def edit
        @account
    end
    def update 
        @account
        if Account.update(account_params)
            render json: AccountSerializer.new(@account).serialized_json
        else 
            render json: {error: @account.errors.messages }, status: 422
        end
    end
    def destroy
        @account
        if @account.destroy
            head :no_content
        else
            render json: {error: @account.errors.messages }, status: 422
        end
    end

    private 
    def get_account
        @account = Account.find(params[:id])
    end
    def account_params
        params.require(:account).permit(:name, :balance, :user_id)
    end
end
