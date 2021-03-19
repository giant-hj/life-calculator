import React from "react";
import { Button } from "@material-ui/core";
import NavBar from "components/common/navigation/NavBar";

const HomePage = (props) => {
  return (
    <div>
      <NavBar
        selectedTab={selectedTab}
        selectTab={setSelectedTab}
        // openLoginDialog={openLoginDialog}
        // openRegisterDialog={openRegisterDialog}
        mobileDrawerOpen={isMobileDrawerOpen}
        handleMobileDrawerOpen={handleMobileDrawerOpen}
        handleMobileDrawerClose={handleMobileDrawerClose}
      />
      <Button variant="contained" color="primary">
        종합소득세 계산
      </Button>
      <Button variant="contained" color="primary">
        이자 계산
      </Button>
      <Button variant="contained" color="primary">
        수익률 계산
      </Button>
    </div>
  );
};

export default HomePage;
