import React from 'react';
import {Avatar, Image, Tooltip} from "antd";
import {UserOutlined} from "@ant-design/icons";

const DEFAULT_AVATAR_SIZE = 48;

const UserAvatar = ({url, name, size}) => {
    const avatarSize = size ? size :  DEFAULT_AVATAR_SIZE;
    return (
        <Tooltip title={name ? name : '' }>
            {url === 'DEFAULT_USER_IMAGE'  || !url ?
                <Avatar size={avatarSize} icon={<UserOutlined/>}/> :
                <Avatar
                    shape="circle"
                    size={avatarSize}
                    src={
                        <Image
                            src={url}
                            style={{width: avatarSize}}
                        />
                    }
                />
            }
        </Tooltip>
    );
};

export default UserAvatar;
