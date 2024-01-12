class Api::V1::PaymentsController < ApplicationController
    protect_from_forgery with: :null_session

    before_action :get_payment, only: [:show, :edit, :update, :destroy]

    def index
        @payments = Payment.all 
        render json: PaymentSerializer.new(@payments).serialized_json 
    end
    def show 
        @payment
        render json: PaymentSerializer.new(@payment).serialized_json
    end
    def new 
        @payment = Payment.new
    end 
    def create 
        @payment=Payment.new(payment_params)
        if @payment.save
            render json: PaymentSerializer.new(@payment).serialized_json
        else
            render json: {error: @payment.errors.messages }, status: 422
        end
    end
    def edit
        @payment
    end
    def update 
        @payment
        if payment.update(payment_params)
            render json: PaymentSerializer.new(@payment).serialized_json
        else 
            render json: {error: @payment.errors.messages }, status: 422
        end
    end
    def destroy
        @payment
        if @payment.destroy
            head :no_content
        else
            render json: {error: @payment.errors.messages }, status: 422
        end
    end

    private 
    def get_payment
        @payment = Payment.find(params[:id])
    end
    def payment_params
        params.require(:payment).permit(:amount, :date, :account_id, :user_id)
    end
end
