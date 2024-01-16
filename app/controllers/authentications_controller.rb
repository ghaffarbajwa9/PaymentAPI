class AuthenticationsController < ApplicationController
  # before_action :set_authentication, only: %i[ show edit update destroy ]

  # # GET /authentications or /authentications.json
  # def index
  #   @authentications = Authentication.all
  # end

  # # GET /authentications/1 or /authentications/1.json
  # def show
  # end

  # # GET /authentications/new
  # def new
  #   @authentication = Authentication.new
  # end

  # # GET /authentications/1/edit
  # def edit
  # end

  # # POST /authentications or /authentications.json
  # def create
  #   @authentication = Authentication.new(authentication_params)

  #   respond_to do |format|
  #     if @authentication.save
  #       format.html { redirect_to authentication_url(@authentication), notice: "Authentication was successfully created." }
  #       format.json { render :show, status: :created, location: @authentication }
  #     else
  #       format.html { render :new, status: :unprocessable_entity }
  #       format.json { render json: @authentication.errors, status: :unprocessable_entity }
  #     end
  #   end
  # end

  # # PATCH/PUT /authentications/1 or /authentications/1.json
  # def update
  #   respond_to do |format|
  #     if @authentication.update(authentication_params)
  #       format.html { redirect_to authentication_url(@authentication), notice: "Authentication was successfully updated." }
  #       format.json { render :show, status: :ok, location: @authentication }
  #     else
  #       format.html { render :edit, status: :unprocessable_entity }
  #       format.json { render json: @authentication.errors, status: :unprocessable_entity }
  #     end
  #   end
  # end

  # # DELETE /authentications/1 or /authentications/1.json
  # def destroy
  #   @authentication.destroy!

  #   respond_to do |format|
  #     format.html { redirect_to authentications_url, notice: "Authentication was successfully destroyed." }
  #     format.json { head :no_content }
  #   end
  # end
  skip_before_action :authorize_request, :only => :authenticate

  
  def authenticate
    auth_token = AuthenticateUser.new(authentication_params[:email], authentication_params[:password]).call

    render json: { auth_token: auth_token }
  end
  private
    # Use callbacks to share common setup or constraints between actions.
    # def set_authentication
    #   @authentication = Authentication.find(params[:id])
    # end

    # Only allow a list of trusted parameters through.
    def authentication_params
      params.fetch(:authentication, {})
    end
end
