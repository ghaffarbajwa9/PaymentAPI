require "application_system_test_case"

class AuthenticationsTest < ApplicationSystemTestCase
  setup do
    @authentication = authentications(:one)
  end

  test "visiting the index" do
    visit authentications_url
    assert_selector "h1", text: "Authentications"
  end

  test "should create authentication" do
    visit authentications_url
    click_on "New authentication"

    click_on "Create Authentication"

    assert_text "Authentication was successfully created"
    click_on "Back"
  end

  test "should update Authentication" do
    visit authentication_url(@authentication)
    click_on "Edit this authentication", match: :first

    click_on "Update Authentication"

    assert_text "Authentication was successfully updated"
    click_on "Back"
  end

  test "should destroy Authentication" do
    visit authentication_url(@authentication)
    click_on "Destroy this authentication", match: :first

    assert_text "Authentication was successfully destroyed"
  end
end
